import React from 'react';
import { motion } from 'framer-motion';
import ActivationCard from '../../../components/cards/activationCard';
import './scrollableSection.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const ScrollableSection = ({ subdomainsList }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                border: '1px solid white ',
                backgroundColor: 'inherit',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                padding: '1rem',
                maxHeight: '70%',
                width: '100%',
                boxSizing: 'border-box',
                overflowY: 'auto',
                overflowX: 'hidden',
                color: '#000',
                scrollbarWidth: 'thin',
                scrollbarColor: '#888 transparent',
                '&::-webkit-scrollbar': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#888',
                    borderRadius: '6px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#555',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: 'transparent',
                },
            }}
        >
            {subdomainsList.length === 0 ? (
                <div style={{ textAlign: 'center' }}>
                    No subdomains till now.
                </div>
            ) : (
                subdomainsList.reverse().map((subdomain, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            marginBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: 'inherit',
                            color: 'white',
                            borderRadius: '0.25rem',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <ActivationCard status="status" subdomain={subdomain} />
                        </div>
                    </motion.div>
                ))
            )}
        </motion.div>
    );
};

export default ScrollableSection;
